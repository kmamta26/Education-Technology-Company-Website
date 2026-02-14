import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { toast } from 'sonner';
import { Send, CheckCircle2 } from 'lucide-react';

export function SoftwareInquiryForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Inquiry submitted successfully!', {
        description: 'Our software team will contact you within 24 hours.',
        icon: <CheckCircle2 className="h-5 w-5" />,
      });
      setIsSubmitting(false);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Name */}
        <div className="space-y-2">
          <Label htmlFor="companyName" className="text-white">Company Name *</Label>
          <Input
            id="companyName"
            type="text"
            required
            placeholder="Your company name"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
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
            placeholder="your.email@company.com"
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

        {/* Project Type */}
        <div className="space-y-2">
          <Label htmlFor="projectType" className="text-white">Project Type *</Label>
          <Select value={formData.projectType} onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#007BFF]">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web">Web Application</SelectItem>
              <SelectItem value="mobile">Mobile Application</SelectItem>
              <SelectItem value="enterprise">Enterprise Software</SelectItem>
              <SelectItem value="ecommerce">E-Commerce Platform</SelectItem>
              <SelectItem value="custom">Custom Software</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Budget Range */}
        <div className="space-y-2">
          <Label htmlFor="budget" className="text-white">Budget Range *</Label>
          <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#007BFF]">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Under ₹5 Lakhs</SelectItem>
              <SelectItem value="medium">₹5-15 Lakhs</SelectItem>
              <SelectItem value="large">₹15-50 Lakhs</SelectItem>
              <SelectItem value="enterprise">₹50 Lakhs+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-2">
        <Label htmlFor="timeline" className="text-white">Expected Timeline</Label>
        <Input
          id="timeline"
          type="text"
          placeholder="e.g., 3-6 months"
          value={formData.timeline}
          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#007BFF]"
        />
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-white">Project Description *</Label>
        <Textarea
          id="description"
          required
          rows={5}
          placeholder="Tell us about your project requirements, goals, and any specific features you need..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
            Submit Inquiry
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      <p className="text-gray-400 text-sm text-center">
        By submitting this form, you agree to be contacted by our software team regarding your inquiry.
      </p>
    </form>
  );
}
