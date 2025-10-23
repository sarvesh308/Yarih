
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LanguageClasses = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Spoken English & Hindi Classes</h2>
          <p className="section-subtitle">
            Develop language fluency with our specialized courses focusing on grammar, 
            pronunciation, and conversational skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Spoken English Card */}
          <Card className="edu-card relative overflow-hidden">
            <CardHeader className="pb-2">
              <div className="w-16 h-16 flex items-center justify-center bg-royal-100 rounded-full mb-4">
                <span className="text-3xl">🇬🇧</span>
              </div>
              <CardTitle className="text-2xl">Spoken English</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Online</span>
                  <span className="text-royal-700 font-bold">₹450/session</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Personal Coaching</span>
                  <span className="text-royal-700 font-bold">₹650/session</span>
                </div>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <span className="text-royal-500 mr-2">•</span>
                    <span>Grammar & pronunciation focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-royal-500 mr-2">•</span>
                    <span>Conversational practice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-royal-500 mr-2">•</span>
                    <span>Business English options</span>
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-royal-500 hover:bg-royal-600">
                  Enroll Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Hindi Classes Card */}
          <Card className="edu-card relative overflow-hidden">
            <CardHeader className="pb-2">
              <div className="w-16 h-16 flex items-center justify-center bg-royal-100 rounded-full mb-4">
                <span className="text-3xl">🇮🇳</span>
              </div>
              <CardTitle className="text-2xl">Hindi Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Online</span>
                  <span className="text-royal-700 font-bold">₹450/session</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Personal Coaching</span>
                  <span className="text-royal-700 font-bold">₹650/session</span>
                </div>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <span className="text-royal-500 mr-2">•</span>
                    <span>Beginner to advanced levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-royal-500 mr-2">•</span>
                    <span>Reading & writing skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-royal-500 mr-2">•</span>
                    <span>Cultural context learning</span>
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-royal-500 hover:bg-royal-600">
                  Enroll Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LanguageClasses;
