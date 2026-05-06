import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PageLayout } from "@/components/intown/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { api } from "@/lib/api";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Instagram, Twitter, Facebook, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Mail, label: "Email", value: "intownathletics@outlook.com", href: "mailto:intownathletics@outlook.com" },
  { icon: Phone, label: "Phone", value: "(404) 000-0000", href: "tel:4040000000" },
  { icon: MapPin, label: "Location", value: "Atlanta Metro Area, GA", href: null },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9:00 AM – 5:00 PM", href: null },
];

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await api.post("/api/contact", data);
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you soon.");
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#69BE28]/10 flex items-center justify-center">
            <CheckCircle size={32} className="text-[#69BE28]" />
          </div>
        </div>
        <h3 className="font-barlow-condensed font-black text-2xl text-[#0B1F3A] uppercase mb-3">Message Sent!</h3>
        <p className="font-barlow text-gray-500">We'll get back to you within 1–2 business days.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel className="font-barlow font-semibold text-[#0B1F3A]">Your Name</FormLabel>
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
        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem>
            <FormLabel className="font-barlow font-semibold text-[#0B1F3A]">Message</FormLabel>
            <FormControl>
              <Textarea placeholder="How can we help you?" rows={6} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full bg-[#69BE28] hover:bg-[#5aaa22] text-white font-barlow-condensed font-bold uppercase tracking-wide py-6"
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}

export default function Contact() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-[#0B1F3A] pt-32 pb-20 dot-pattern">
        <div className="container mx-auto px-4">
          <div className="text-white/40 font-barlow text-sm mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </div>
          <h1 className="font-barlow-condensed font-black text-5xl md:text-7xl text-white uppercase leading-none mb-4">
            Get in Touch
          </h1>
          <p className="font-barlow text-white/60 text-xl">Have questions? We'd love to hear from you.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form — 2/3 */}
            <div className="lg:col-span-2">
              <h2 className="font-barlow-condensed font-black text-3xl text-[#0B1F3A] uppercase mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact info — 1/3 */}
            <div>
              <h2 className="font-barlow-condensed font-black text-2xl text-[#0B1F3A] uppercase mb-8">Contact Info</h2>
              <div className="space-y-4 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-[#F8F9FA] rounded-lg">
                    <item.icon size={20} className="text-[#69BE28] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-barlow-condensed font-bold text-xs uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="font-barlow text-[#0B1F3A] hover:text-[#69BE28] transition-colors text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-barlow text-[#0B1F3A] text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mb-8">
                <h3 className="font-barlow-condensed font-bold text-sm uppercase tracking-widest text-gray-400 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[Instagram, Twitter, Facebook].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#0B1F3A] flex items-center justify-center text-white hover:bg-[#69BE28] transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Spond CTA */}
              <div className="bg-[#0B1F3A] rounded-xl p-6">
                <h3 className="font-barlow-condensed font-black text-xl text-white uppercase mb-2">Ready to Register?</h3>
                <p className="font-barlow text-white/60 text-sm mb-4">Join Summer 2026 camps through Spond.</p>
                <a
                  href="https://spond.com/invite/ZIUTQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#F56600] hover:bg-[#d95a00] text-white font-barlow-condensed font-bold uppercase tracking-wide text-center px-4 py-3 rounded transition-colors"
                >
                  Register on Spond
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-barlow-condensed font-black text-3xl text-[#0B1F3A] uppercase mb-4">
            Serving Atlanta's Youth
          </h2>
          <p className="font-barlow text-gray-500 max-w-xl mx-auto">
            Intown Athletics serves communities across the Atlanta Metro area, bringing high-quality youth sports programming to neighborhoods throughout the city.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
