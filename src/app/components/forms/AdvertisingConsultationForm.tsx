// import { useState } from 'react';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';
// import { Label } from '../ui/label';
// import { Textarea } from '../ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// import { Checkbox } from '../ui/checkbox';
// import { toast } from 'sonner';
// import { Send, CheckCircle2 } from 'lucide-react';

// export function AdvertisingConsultationForm() {
//   const [formData, setFormData] = useState({
//     businessName: '',
//     contactName: '',
//     email: '',
//     phone: '',
//     website: '',
//     industry: '',
//     budget: '',
//     services: [] as string[],
//     goals: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const serviceOptions = [
//     { id: 'seo', label: 'SEO & Content Marketing' },
//     { id: 'social', label: 'Social Media Management' },
//     { id: 'ppc', label: 'Pay-Per-Click Advertising' },
//     { id: 'email', label: 'Email Marketing' },
//     { id: 'branding', label: 'Brand Strategy & Design' },
//     { id: 'analytics', label: 'Analytics & Reporting' },
//   ];

//   const handleServiceToggle = (serviceId: string) => {
//     setFormData({
//       ...formData,
//       services: formData.services.includes(serviceId)
//         ? formData.services.filter(s => s !== serviceId)
//         : [...formData.services, serviceId],
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (formData.services.length === 0) {
//     toast.error('Please select at least one service');
//     return;
//   }

//   setIsSubmitting(true);

//   const payload = {
//   access_key: "YOUR_WEB3FORMS_API_KEY",

//   subject: "Advertising Consultation Inquiry",
//   from_name: "DreamsGuider Website",

//   name: formData.contactName, // ✅ add this

//   // businessName: formData.businessName,
//   // contactName: formData.contactName,
//   // email: formData.email,
//   // phone: formData.phone,
//   // website: formData.website,
//   // industry: formData.industry,
//   // budget: formData.budget,
//   // services: formData.services.join(", "),
//   // goals: formData.goals,

//   message: `
// Business: ${formData.businessName}
// Contact: ${formData.contactName}
// Email: ${formData.email}
// Phone: ${formData.phone}
// Website: ${formData.website}
// Industry: ${formData.industry}
// Budget: ${formData.budget}
// Services: ${formData.services.join(", ")}
// Goals:
// ${formData.goals}
// `,

// };


//   try {
//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });

//     const result = await response.json();

//     if (result.success) {
//       toast.success("Consultation request submitted!", {
//         description:
//           "Our advertising team will contact you within 24 hours to schedule a free consultation.",
//         icon: <CheckCircle2 className="h-5 w-5" />,
//       });

//       // reset form (same as your original)
//       setFormData({
//         businessName: "",
//         contactName: "",
//         email: "",
//         phone: "",
//         website: "",
//         industry: "",
//         budget: "",
//         services: [],
//         goals: "",
//       });
//     } else {
//       toast.error("Submission failed. Please try again.");
//     }
//   } catch (error) {
//     toast.error("Network error. Please try again.");
//   }

//   setIsSubmitting(false);
// };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Business Name */}
//         <div className="space-y-2">
//           <Label htmlFor="businessName" className="text-white">Business Name *</Label>
//           <Input
//             id="businessName"
//             type="text"
//             required
//             placeholder="Your business name"
//             value={formData.businessName}
//             onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
//             className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#007BFF]"
//           />
//         </div>

//         {/* Contact Name */}
//         <div className="space-y-2">
//           <Label htmlFor="contactName" className="text-white">Contact Person *</Label>
//           <Input
//             id="contactName"
//             type="text"
//             required
//             placeholder="Your name"
//             value={formData.contactName}
//             onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
//             className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#007BFF]"
//           />
//         </div>

//         {/* Email */}
//         <div className="space-y-2">
//           <Label htmlFor="email" className="text-white">Email Address *</Label>
//           <Input
//             id="email"
//             type="email"
//             required
//             placeholder="your.email@business.com"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#007BFF]"
//           />
//         </div>

//         {/* Phone */}
//         <div className="space-y-2">
//           <Label htmlFor="phone" className="text-white">Phone Number *</Label>
//           <Input
//             id="phone"
//             type="tel"
//             required
//             placeholder="+91 XXXXX XXXXX"
//             value={formData.phone}
//             onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//             className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#007BFF]"
//           />
//         </div>

//         {/* Website */}
//         <div className="space-y-2">
//           <Label htmlFor="website" className="text-white">Website URL</Label>
//           <Input
//             id="website"
//             type="url"
//             placeholder="https://yourwebsite.com"
//             value={formData.website}
//             onChange={(e) => setFormData({ ...formData, website: e.target.value })}
//             className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#007BFF]"
//           />
//         </div>

//         {/* Industry */}
//         <div className="space-y-2">
//           <Label htmlFor="industry" className="text-white">Industry *</Label>
//           <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
//             <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#007BFF]">
//               <SelectValue placeholder="Select your industry" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="ecommerce">E-Commerce</SelectItem>
//               <SelectItem value="tech">Technology/SaaS</SelectItem>
//               <SelectItem value="education">Education</SelectItem>
//               <SelectItem value="healthcare">Healthcare</SelectItem>
//               <SelectItem value="finance">Finance</SelectItem>
//               <SelectItem value="retail">Retail</SelectItem>
//               <SelectItem value="hospitality">Hospitality</SelectItem>
//               <SelectItem value="real-estate">Real Estate</SelectItem>
//               <SelectItem value="other">Other</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       {/* Monthly Budget */}
//       <div className="space-y-2">
//         <Label htmlFor="budget" className="text-white">Monthly Marketing Budget *</Label>
//         <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
//           <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#007BFF]">
//             <SelectValue placeholder="Select your budget range" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="small">Under ₹50,000</SelectItem>
//             <SelectItem value="medium">₹50,000 - ₹2,00,000</SelectItem>
//             <SelectItem value="large">₹2,00,000 - ₹5,00,000</SelectItem>
//             <SelectItem value="enterprise">₹5,00,000+</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Services Interested In */}
//       <div className="space-y-3">
//         <Label className="text-white">Services You're Interested In *</Label>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {serviceOptions.map((service) => (
//             <div key={service.id} className="flex items-center space-x-2">
//               <Checkbox
//                 id={service.id}
//                 checked={formData.services.includes(service.id)}
//                 onCheckedChange={() => handleServiceToggle(service.id)}
//                 className="border-white/10"
//               />
//               <Label htmlFor={service.id} className="text-white cursor-pointer">
//                 {service.label}
//               </Label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Business Goals */}
//       <div className="space-y-2">
//         <Label htmlFor="goals" className="text-white">Marketing Goals & Objectives *</Label>
//         <Textarea
//           id="goals"
//           required
//           rows={5}
//           placeholder="Tell us about your business goals, target audience, current challenges, and what you hope to achieve with digital advertising..."
//           value={formData.goals}
//           onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
//           className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#007BFF]"
//         />
//       </div>

//       {/* Submit Button */}
//       <Button
//         type="submit"
//         disabled={isSubmitting}
//         className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white py-6 text-lg"
//       >
//         {isSubmitting ? (
//           <>
//             <span className="animate-spin mr-2">⏳</span>
//             Submitting...
//           </>
//         ) : (
//           <>
//             Request Free Consultation
//             <Send className="ml-2 h-5 w-5" />
//           </>
//         )}
//       </Button>

//       <p className="text-gray-400 text-sm text-center">
//         By submitting this form, you agree to receive a free consultation call from our advertising team.
//       </p>
//     </form>
//   );
// }




//@ts-nocheck
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { toast } from "sonner";
import { Send, CheckCircle2 } from "lucide-react";

export function AdvertisingConsultationForm() {
  const initialState = {
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    budget: "",
    services: [] as string[],
    goals: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { id: "seo", label: "SEO & Content Marketing" },
    { id: "social", label: "Social Media Management" },
    { id: "ppc", label: "Pay-Per-Click Advertising" },
    { id: "email", label: "Email Marketing" },
    { id: "branding", label: "Brand Strategy & Design" },
    { id: "analytics", label: "Analytics & Reporting" },
  ];

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const validateForm = () => {
    if (!formData.industry) {
      toast.error("Please select your industry");
      return false;
    }

    if (!formData.budget) {
      toast.error("Please select your budget");
      return false;
    }

    if (formData.services.length === 0) {
      toast.error("Please select at least one service");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      access_key: "453a0698-b3b3-4355-908d-8b67dc01a25d", 

      subject: "Advertising Consultation Inquiry",
      from_name: "DreamsGuider Website",

      name: formData.contactName,
      email: formData.email,

      message: `
Business: ${formData.businessName}
Contact: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Website: ${formData.website}
Industry: ${formData.industry}
Budget: ${formData.budget}
Services: ${formData.services.join(", ")}

Goals:
${formData.goals}
`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Consultation request submitted!", {
          description:
            "Our advertising team will contact you within 24 hours.",
          icon: <CheckCircle2 className="h-5 w-5" />,
        });

        setFormData(initialState);
      } else {
        toast.error(result.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Business Name */}
        <div className="space-y-2">
          <Label htmlFor="businessName" className="text-white">Business Name *</Label>
          <Input
            id="businessName"
            type="text"
            required
            placeholder="Your business name"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#007BFF]"
          />
        </div>

        {/* Contact Name */}
        <div className="space-y-2">
          <Label htmlFor="contactName" className="text-white">Contact Person *</Label>
          <Input
            id="contactName"
            type="text"
            required
            placeholder="Your name"
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#007BFF]"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email Address *</Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="your.email@business.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#007BFF]"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            required
            placeholder="+91 XXXXX XXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#007BFF]"
          />
        </div>

        {/* Website */}
        <div className="space-y-2">
          <Label htmlFor="website" className="text-white">Website URL</Label>
          <Input
            id="website"
            type="url"
            placeholder="https://yourwebsite.com"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#007BFF]"
          />
        </div>

        {/* Industry */}
        <div className="space-y-2">
          <Label htmlFor="industry" className="text-white">Industry *</Label>
          <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#007BFF]">
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ecommerce">E-Commerce</SelectItem>
              <SelectItem value="tech">Technology/SaaS</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="hospitality">Hospitality</SelectItem>
              <SelectItem value="real-estate">Real Estate</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Monthly Budget */}
      <div className="space-y-2">
        <Label htmlFor="budget" className="text-white">Monthly Marketing Budget *</Label>
        <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
          <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#007BFF]">
            <SelectValue placeholder="Select your budget range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Under ₹50,000</SelectItem>
            <SelectItem value="medium">₹50,000 - ₹2,00,000</SelectItem>
            <SelectItem value="large">₹2,00,000 - ₹5,00,000</SelectItem>
            <SelectItem value="enterprise">₹5,00,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Services Interested In */}
      <div className="space-y-3">
        <Label className="text-white">Services You're Interested In *</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceOptions.map((service) => (
            <div key={service.id} className="flex items-center space-x-2">
              <Checkbox
                id={service.id}
                checked={formData.services.includes(service.id)}
                onCheckedChange={() => handleServiceToggle(service.id)}
                className="border-white/10"
              />
              <Label htmlFor={service.id} className="text-white cursor-pointer">
                {service.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Business Goals */}
      <div className="space-y-2">
        <Label htmlFor="goals" className="text-white">Marketing Goals & Objectives *</Label>
        <Textarea
          id="goals"
          required
          rows={5}
          placeholder="Tell us about your business goals, target audience, current challenges, and what you hope to achieve with digital advertising..."
          value={formData.goals}
          onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#007BFF]"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white py-6 text-lg"
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            Submitting...
          </>
        ) : (
          <>
            Request Free Consultation
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      <p className="text-gray-400 text-sm text-center">
        By submitting this form, you agree to receive a free consultation call from our advertising team.
      </p>
    </form>
  );
}


