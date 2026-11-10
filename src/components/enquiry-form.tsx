import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

type EnquiryKind = "contact" | "volunteer" | "membership" | "pooja";

const volunteerAreas = ["Events", "Cultural activities", "Community service", "Administration", "Communications", "Construction support"];

export function EnquiryForm({ kind, title, intro }: { kind: EnquiryKind; title: string; intro: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [selected, setSelected] = useState<string[]>([]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    if (String(values.get("company") ?? "").trim()) {
      setStatus("success");
      return;
    }
    setStatus("sending");
    const payload = {
      kind,
      name: String(values.get("name") ?? "").trim(),
      email: String(values.get("email") ?? "").trim(),
      phone: String(values.get("phone") ?? "").trim(),
      subject: String(values.get("subject") ?? "").trim(),
      message: String(values.get("message") ?? "").trim(),
      interests: kind === "volunteer" ? selected : [],
      availability: String(values.get("availability") ?? "").trim(),
      skills: String(values.get("skills") ?? "").trim(),
      consent: values.get("consent") === "on",
    };
    const { error } = await supabase.from("community_enquiries").insert(payload);
    if (error) {
      setStatus("error");
      return;
    }
    form.reset();
    setSelected([]);
    setStatus("success");
  }

  return (
    <section className="enquiry-form-section" aria-labelledby="enquiry-form-title">
      <div className="enquiry-form-section__intro"><p className="eyebrow">A note to the team</p><h2 id="enquiry-form-title">{title}</h2><p>{intro}</p></div>
      {status === "success" ? (
        <div className="form-success" role="status"><Check aria-hidden="true" /><div><strong>Thank you for reaching out.</strong><p>Your message has been received by the BHTCC team.</p></div></div>
      ) : (
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="honeypot" aria-hidden="true"><Label htmlFor={`company-${kind}`}>Company</Label><Input id={`company-${kind}`} name="company" tabIndex={-1} autoComplete="off" /></div>
          <div className="enquiry-form__grid">
            <div className="form-field"><Label htmlFor={`name-${kind}`}>Full name</Label><Input id={`name-${kind}`} name="name" required maxLength={120} autoComplete="name" /></div>
            <div className="form-field"><Label htmlFor={`email-${kind}`}>Email address</Label><Input id={`email-${kind}`} name="email" type="email" required maxLength={254} autoComplete="email" /></div>
            <div className="form-field"><Label htmlFor={`phone-${kind}`}>Phone <span>(optional)</span></Label><Input id={`phone-${kind}`} name="phone" type="tel" maxLength={50} autoComplete="tel" /></div>
            {kind !== "volunteer" && <div className="form-field"><Label htmlFor={`subject-${kind}`}>{kind === "membership" ? "Membership question" : kind === "pooja" ? "Ceremony or deity" : "Subject"}</Label><Input id={`subject-${kind}`} name="subject" maxLength={160} /></div>}
            {kind === "volunteer" && <div className="form-field"><Label htmlFor="availability-volunteer">Availability <span>(optional)</span></Label><Input id="availability-volunteer" name="availability" maxLength={500} placeholder="Days or times that suit you" /></div>}
          </div>
          {kind === "volunteer" && <fieldset className="form-fieldset"><legend>Areas of interest <span>(optional)</span></legend><div className="choice-grid">{volunteerAreas.map((area) => <label className="choice-option" key={area}><input type="checkbox" checked={selected.includes(area)} onChange={(event) => setSelected((current) => event.target.checked ? [...current, area] : current.filter((item) => item !== area))} /><span>{area}</span></label>)}</div></fieldset>}
          {kind === "volunteer" && <div className="form-field"><Label htmlFor="skills-volunteer">Skills or experience <span>(optional)</span></Label><Textarea id="skills-volunteer" name="skills" rows={3} maxLength={1000} /></div>}
          <div className="form-field"><Label htmlFor={`message-${kind}`}>{kind === "volunteer" ? "A little more about how you would like to help" : "Message"}</Label><Textarea id={`message-${kind}`} name="message" rows={5} required maxLength={5000} /></div>
          <label className="consent-option"><input type="checkbox" name="consent" required /><span>I agree that BHTCC may use these details to respond to my enquiry.</span></label>
          {status === "error" && <p className="form-error" role="alert">Your message could not be sent just now. Please try again, or email info@ballarathindutemple.org.au.</p>}
          <Button type="submit" variant="default" disabled={status === "sending"} className="form-submit">{status === "sending" ? "Sending…" : "Send enquiry"}<ArrowRight aria-hidden="true" /></Button>
        </form>
      )}
    </section>
  );
}