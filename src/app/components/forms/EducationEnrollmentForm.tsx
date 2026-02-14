import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { toast } from 'sonner';
import { Send, CheckCircle2 } from 'lucide-react';

export function EducationEnrollmentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    education: '',
    experience: '',
    schedule: '',
    goals: '',
    heardFrom: '',
    placementSupport: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Enrollment request submitted!', {
        description: 'Our admissions team will contact you within 24 hours to complete your enrollment.',
        icon: <CheckCircle2 className="h-5 w-5" />,
      });
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        course: '',
        education: '',
        experience: '',
        schedule: '',
        goals: '',
        heardFrom: '',
        placementSupport: false,
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-white">Full Name *</Label>
          <Input
            id="fullName"
            type="text"
            required
            placeholder="Your full name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
            placeholder="your.email@example.com"
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

        {/* Course Selection */}
        <div className="space-y-2">
          <Label htmlFor="course" className="text-white">Interested Course *</Label>
          <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#007BFF]">
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="genai">Generative AI & Machine Learning</SelectItem>
              <SelectItem value="fullstack">Full Stack Development (MERN)</SelectItem>
              <SelectItem value="datascience">Data Science & Analytics</SelectItem>
              <SelectItem value="embedded">Embedded Systems</SelectItem>
              <SelectItem value="cloud">Cloud Computing & DevOps</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Current Education */}
        <div className="space-y-2">
          <Label htmlFor="education" className="text-white">Highest Qualification *</Label>
          <Select value={formData.education} onValueChange={(value) => setFormData({ ...formData, education: value })}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#007BFF]">
              <SelectValue placeholder="Select your qualification" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="highschool">High School</SelectItem>
              <SelectItem value="diploma">Diploma</SelectItem>
              <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
              <SelectItem value="masters">Master's Degree</SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Work Experience */}
        <div className="space-y-2">
          <Label htmlFor="experience" className="text-white">Work Experience</Label>
          <Select value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#007BFF]">
              <SelectValue placeholder="Years of experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fresher">Fresher</SelectItem>
              <SelectItem value="1-2">1-2 years</SelectItem>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="5+">5+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Preferred Schedule */}
        <div className="space-y-2">
          <Label htmlFor="schedule" className="text-white">Preferred Schedule *</Label>
          <Select value={formData.schedule} onValueChange={(value) => setFormData({ ...formData, schedule: value })}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#007BFF]">
              <SelectValue placeholder="Select preferred time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekday-morning">Weekday Morning</SelectItem>
              <SelectItem value="weekday-evening">Weekday Evening</SelectItem>
              <SelectItem value="weekend">Weekend</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* How did you hear about us */}
        <div className="space-y-2">
          <Label htmlFor="heardFrom" className="text-white">How did you hear about us?</Label>
          <Select value={formData.heardFrom} onValueChange={(value) => setFormData({ ...formData, heardFrom: value })}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#007BFF]">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="google">Google Search</SelectItem>
              <SelectItem value="social">Social Media</SelectItem>
              <SelectItem value="referral">Friend Referral</SelectItem>
              <SelectItem value="ad">Advertisement</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Career Goals */}
      <div className="space-y-2">
        <Label htmlFor="goals" className="text-white">Career Goals *</Label>
        <Textarea
          id="goals"
          required
          rows={4}
          placeholder="Tell us about your career goals and what you hope to achieve from this course..."
          value={formData.goals}
          onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#007BFF]"
        />
      </div>

      {/* Placement Support Checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="placementSupport"
          checked={formData.placementSupport}
          onCheckedChange={(checked) => setFormData({ ...formData, placementSupport: checked as boolean })}
          className="border-white/10"
        />
        <Label htmlFor="placementSupport" className="text-white cursor-pointer">
          I'm interested in placement support after course completion
        </Label>
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
            Submit Enrollment Request
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      <p className="text-gray-400 text-sm text-center">
        By submitting this form, you agree to be contacted by our admissions team regarding your enrollment.
      </p>
    </form>
  );
}
