import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const subjects = [
  "Mathematics", "Science", "Physics", "Chemistry", "Biology", 
  "Social Studies", "English", "Hindi", "Computer Science"
];

const courseOptions = [
  { label: "Classes 6-8", value: "6-8", pricePerSubject: 350 },
  { label: "Classes 9-10", value: "9-10", pricePerSubject: 450 },
  { label: "Classes 11-12", value: "11-12", pricePerSubject: 450 },
  { label: "NEET", value: "NEET", pricePerSubject: 500 },
  { label: "JEE", value: "JEE", pricePerSubject: 500 }
];

const whatsappNumber = "9952636921";

const CourseCalculator = () => {
  const [courseLevel, setCourseLevel] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isHomeTuition, setIsHomeTuition] = useState(false);
  const { toast } = useToast();

  const handleSubjectToggle = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const calculateTotal = () => {
    if (!courseLevel || selectedSubjects.length === 0) return 0;
    const course = courseOptions.find(c => c.value === courseLevel);
    return course ? course.pricePerSubject * selectedSubjects.length : 0;
  };

  const getPricePerSubject = () => {
    if (!courseLevel) return 0;
    const course = courseOptions.find(c => c.value === courseLevel);
    return course ? course.pricePerSubject : 0;
  };

  // Prepare mailto link
  const getMailToLink = () => {
    const subject = encodeURIComponent("Course Enquiry from Yarih Group Website");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCourse Level: ${courseLevel}\nSubjects: ${selectedSubjects.join(", ")}\nType: ${isHomeTuition ? "Home Tuition" : "Online Tutoring"}\n${!isHomeTuition ? `Total Amount: ₹${calculateTotal()}` : ""}`
    );
    return `mailto:yarihgroup@gmail.com?subject=${subject}&body=${body}`;
  };

  // Prepare WhatsApp link
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello, I am interested in your courses.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCourse Level: ${courseLevel}\nSubjects: ${selectedSubjects.join(", ")}\nType: ${isHomeTuition ? "Home Tuition" : "Online Tutoring"}\n${!isHomeTuition ? `Total Amount: ₹${calculateTotal()}` : ""}`
    );
    return `https://wa.me/91${whatsappNumber}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!courseLevel || selectedSubjects.length === 0 || !name || !email || !phone) {
      toast({
        title: "Please fill all required fields",
        description: "All fields are required to process your enrollment.",
        variant: "destructive"
      });
      return;
    }

    // Open mail client
    window.location.href = getMailToLink();

    toast({
      title: "Message Ready!",
      description: "Your email client will open to send your enquiry to yarihgroup@gmail.com.",
    });
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-extrabold text-blue-700 drop-shadow-lg">Course Calculator</h2>
          <p className="section-subtitle text-lg text-black">
            Select your course level and subjects to get <span className="text-blue-700 font-semibold">instant pricing</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-blue-50 to-sky-100">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Calculate Your Course Price</CardTitle>
              <CardDescription className="text-blue-600">
                Customize your learning experience and see transparent pricing instantly
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                  {/* Course Type Toggle */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        !isHomeTuition ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 bg-white'
                      }`}
                      onClick={() => setIsHomeTuition(false)}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          !isHomeTuition ? 'border-blue-500' : 'border-gray-300'
                        }`}>
                          {!isHomeTuition && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                        </div>
                        <span className="ml-2 font-medium text-blue-700">Online Tutoring</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Learn from the comfort of your home with our expert online tutors</p>
                    </div>
                    
                    <div
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        isHomeTuition ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 bg-white'
                      }`}
                      onClick={() => setIsHomeTuition(true)}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isHomeTuition ? 'border-blue-500' : 'border-gray-300'
                        }`}>
                          {isHomeTuition && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                        </div>
                        <span className="ml-2 font-medium text-blue-700">Home Tuition</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Personalized one-on-one learning at your location</p>
                    </div>
                  </div>

                  {isHomeTuition && (
                    <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-blue-50 p-4 rounded-lg border border-yellow-300">
                      <p className="text-yellow-900 font-medium">
                        Prices vary based on your location. Please complete the form and our team will contact you with accurate pricing.
                      </p>
                    </div>
                  )}

                  {/* Course Level Selection */}
                  <div>
                    <Label className="block mb-2 text-base text-blue-700">Select Course Level</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {courseOptions.map(course => (
                        <div
                          key={course.value}
                          onClick={() => setCourseLevel(course.value)}
                          className={`border-2 rounded-md p-3 cursor-pointer transition-all text-center font-semibold ${
                            courseLevel === course.value ? 'border-blue-500 bg-blue-50 text-blue-700 shadow' : 'border-gray-200 bg-white hover:border-blue-300'
                          }`}
                        >
                          {course.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subject Selection */}
                  {courseLevel && (
                    <div>
                      <Label className="block mb-2 text-base text-blue-700">Select Subjects</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {subjects.map(subject => (
                          <div
                            key={subject}
                            onClick={() => handleSubjectToggle(subject)}
                            className={`border-2 rounded-md p-3 cursor-pointer transition-all flex items-center font-medium ${
                              selectedSubjects.includes(subject) ? 'border-blue-500 bg-blue-50 text-blue-700 shadow' : 'border-gray-200 bg-white hover:border-blue-300'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded border flex items-center justify-center mr-2 ${
                              selectedSubjects.includes(subject) ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                            }`}>
                              {selectedSubjects.includes(subject) && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                            {subject}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price Calculation */}
                  {!isHomeTuition && courseLevel && selectedSubjects.length > 0 && (
                    <div className="bg-gradient-to-r from-blue-50 via-sky-100 to-indigo-100 p-6 rounded-lg shadow">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">Price Calculation</h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-black">Price per subject:</span>
                          <span className="font-medium text-blue-700">₹{getPricePerSubject()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-black">Number of subjects:</span>
                          <span className="font-medium text-blue-700">{selectedSubjects.length}</span>
                        </div>
                        <div className="border-t pt-2 mt-2 flex justify-between">
                          <span className="font-bold text-black">Total (per session):</span>
                          <span className="font-bold text-blue-700">₹{calculateTotal()}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600">Each session is 90 minutes with expert instructors</p>
                    </div>
                  )}

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-blue-700">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-blue-700">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-blue-700">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-8">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-6 text-lg shadow-lg flex items-center justify-center"
                  >
                    Send Message
                  </Button>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      type="button"
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-6 text-lg shadow-lg flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.348 7.09L4 29l7.184-2.312C13.08 27.14 14.52 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.34 0-2.66-.26-3.89-.77l-.28-.12-4.27 1.38 1.39-4.16-.18-.29C7.27 18.01 7 16.52 7 15c0-5.01 4.06-9.08 9.06-9.08S25.12 9.99 25.12 15c0 5.01-4.06 9.08-9.12 9.08zm5.07-6.13c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.27-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.28 1.23.45 1.65.57.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                      </svg>
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseCalculator;