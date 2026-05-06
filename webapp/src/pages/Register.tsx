import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PageLayout } from "@/components/intown/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "@/lib/api";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";

const registrationSchema = z.object({
  parentName: z.string().min(2, "Parent name is required"),
  childName: z.string().min(2, "Child name is required"),
  childAge: z.coerce.number().int().min(4, "Must be at least 4").max(18, "Must be 18 or younger"),
  sport: z.enum(["Basketball", "Soccer", "Football", "Baseball", "Multi-Sport"]),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  emergencyContact: z.string().min(2, "Emergency contact is required"),
  medicalNotes: z.string().optional().default(""),
  tshirtSize: z.enum(["YXS", "YS", "YM", "YL", "AS", "AM", "AL", "AXL"]),
  consentSigned: z.literal(true, { errorMap: () => ({ message: "You must agree to the waiver to register" }) }),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const sizeLabels: Record<string, string> = {
  YXS: "Youth XS", YS: "Youth S", YM: "Youth M", YL: "Youth L",
  AS: "Adult S", AM: "Adult M", AL: "Adult L", AXL: "Adult XL",
};

function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: { medicalNotes: "", parentName: "", childName: "", email: "", phone: "", emergencyContact: "" },
  });

  const onSubmit = async (data: RegistrationForm) => {
    try {
      await api.post("/api/registrations", data);
      setSubmitted(true);
      toast.success("Registration received! Our team will contact you within 24 hours.");
    } catch {
      toast.error("Something went wrong. Please try again or register directly on Spond.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#69BE28]/10 flex items-center justify-center">
            <CheckCircle size={40} className="text-[#69BE28]" />
          </div>
        </div>
        <h3 className="font-barlow-condensed font-black text-3xl text-[#0B1F3A] uppercase mb-3">
          Registration Received!
        </h3>
        <p className="font-barlow text-gray-500 max-w-md mx-auto mb-8">
          Our team will review your submission and contact you within 24 hours to complete your registration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-[#69BE28] hover:bg-[#5aaa22] text-white font-barlow-condensed font-bold uppercase">
            <a href="https://spond.com/invite/ZIUTQ" target="_blank" rel="noopener noreferrer">Also Register on Spond</a>
          </Button>
          <Button asChild variant="outline" className="border-[#0B1F3A] text-[#0B1F3A] font-barlow-condensed font-bold uppercase">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        {/* Parent Info */}
        <div>
          <h3 className="font-barlow-condensed font-black text-xl text-[#0B1F3A] uppercase border-b border-gray-200 pb-3 mb-6">
            Parent / Guardian Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField control={form.control} name="parentName" render={({ field }) => (
              <FormItem>
                <FormLabel className="font-barlow font-semibold text-[#0B1F3A]">Parent / Guardian Name</FormLabel>
                <FormControl><Input placeholder="Jane Smith" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel className="font-barlow font-semibold text-[#0B1F3A]">Email Address</FormLabel>
                <FormControl><Input type="email" placeholder="jane@example.com" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem>
                <FormLabel className="font-barlow font-semibold text-[#0B1F3A]">Phone Number</FormLabel>
                <FormControl><Input type="tel" placeholder="(404) 555-0100" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="emergencyContact" render={({ field }) => (
              <FormItem>
                <FormLabel className="font-barlow font-semibold text-[#0B1F3A]">Emergency Contact</FormLabel>
                <FormControl><Input placeholder="Name and phone number" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>
        </div>

        {/* Athlete Info */}
        <div>
          <h3 className="font-barlow-condensed font-black text-xl text-[#0B1F3A] uppercase border-b border-gray-200 pb-3 mb-6">
            Athlete Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField control={form.control} name="childName" render={({ field }) => (
              <FormItem>
                <FormLabel className="font-barlow font-semibold text-[#0B1F3A]">Child's Name</FormLabel>
                <FormControl><Input placeholder="Alex Smith" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="childAge" render={({ field }) => (
              <FormItem>
                <FormLabel className="font-barlow font-semibold text-[#0B1F3A]">Child's Age</FormLabel>
                <FormControl><Input type="number" min={4} max={18} placeholder="10" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="sport" render={({ field }) => (
              <FormItem>
                <FormLabel className="font-barlow font-semibold text-[#0B1F3A]">Camp / Sport Selection</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select a sport" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {["Basketball", "Soccer", "Football", "Baseball", "Multi-Sport"].map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="tshirtSize" render={({ field }) => (
              <FormItem>
                <FormLabel className="font-barlow font-semibold text-[#0B1F3A]">T-Shirt Size</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(sizeLabels).map(([val, label]) => (
                      <SelectItem key={val} value={val}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
          </div>
        </div>

        {/* Medical */}
        <div>
          <h3 className="font-barlow-condensed font-black text-xl text-[#0B1F3A] uppercase border-b border-gray-200 pb-3 mb-6">
            Medical Information <span className="text-gray-400 font-barlow font-normal normal-case text-sm">(Optional)</span>
          </h3>
          <FormField control={form.control} name="medicalNotes" render={({ field }) => (
            <FormItem>
              <FormLabel className="font-barlow font-semibold text-[#0B1F3A]">Medical Notes / Allergies</FormLabel>
              <FormControl>
                <Textarea placeholder="List any medical conditions, allergies, or special needs..." rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        {/* Waiver */}
        <div>
          <h3 className="font-barlow-condensed font-black text-xl text-[#0B1F3A] uppercase border-b border-gray-200 pb-3 mb-6">
            Waiver &amp; Consent
          </h3>
          <FormField control={form.control} name="consentSigned" render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="font-barlow text-gray-600 text-sm leading-relaxed cursor-pointer">
                  I give consent for my child to participate in Intown Athletics camps and activities. I understand that sports carry inherent risks and I authorize emergency medical treatment if needed. I agree to the terms of participation.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )} />
        </div>

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full bg-[#69BE28] hover:bg-[#5aaa22] text-white font-barlow-condensed font-black uppercase tracking-wide text-lg py-6"
        >
          {form.formState.isSubmitting ? "Submitting..." : "Submit Registration Interest"}
        </Button>
      </form>
    </Form>
  );
}

export default function Register() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-[#0B1F3A] pt-32 pb-16 dot-pattern">
        <div className="container mx-auto px-4">
          <div className="text-white/40 font-barlow text-sm mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Register</span>
          </div>
          <h1 className="font-barlow-condensed font-black text-5xl md:text-7xl text-white uppercase leading-none mb-8">
            Register Your Athlete
          </h1>
          {/* Two paths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <div className="border-2 border-[#69BE28] rounded-xl p-6 bg-white/5">
              <div className="font-barlow-condensed font-black text-[#69BE28] uppercase text-sm tracking-widest mb-2">Recommended</div>
              <h3 className="font-barlow-condensed font-black text-2xl text-white uppercase mb-2">Register Directly on Spond</h3>
              <p className="font-barlow text-white/60 text-sm mb-4">Official, instant confirmation, free app for families.</p>
              <a
                href="https://spond.com/invite/ZIUTQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#F56600] hover:bg-[#d95a00] text-white font-barlow-condensed font-bold uppercase tracking-wide px-6 py-2.5 rounded transition-colors"
              >
                Register on Spond →
              </a>
            </div>
            <div className="border-2 border-dashed border-white/20 rounded-xl p-6">
              <div className="font-barlow-condensed font-bold text-white/40 uppercase text-sm tracking-widest mb-2">Or</div>
              <h3 className="font-barlow-condensed font-black text-2xl text-white uppercase mb-2">Submit Interest Form</h3>
              <p className="font-barlow text-white/60 text-sm">We'll follow up with you by email or phone within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-10">
            <h2 className="font-barlow-condensed font-black text-3xl text-[#0B1F3A] uppercase mb-2">Interest & Registration Form</h2>
            <p className="font-barlow text-gray-500">
              Submit this form and our team will contact you within 24 hours to complete your registration.
            </p>
          </div>
          <RegistrationForm />
        </div>
      </section>

      {/* Bottom Spond CTA */}
      <section className="bg-[#F8F9FA] py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-barlow text-gray-600 mb-4">Prefer to register directly? Use Spond for instant confirmation.</p>
          <a
            href="https://spond.com/invite/ZIUTQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F56600] hover:bg-[#d95a00] text-white font-barlow-condensed font-bold uppercase tracking-wide px-8 py-3 rounded transition-colors"
          >
            Register on Spond
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
