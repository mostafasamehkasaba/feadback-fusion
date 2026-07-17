import { GradientHeader } from "@/components/gradient-header";
import { Button } from "@/components/ui/button"; 
import Link from "next/link";
import { Map, MessageSquare, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
   
    <div className="space-y-12">
        {/* hero section */}
        <GradientHeader title="Share The Future of our product">
          <div className="flex gap-4 justify-center pt-4">
         <Link href="/roodmap">
  <Button
    size="lg"
    className="bg-white text-black hover:bg-gray-100"
  >
    View Roadmap
    <Map className="ml-2 h-4 w-4" />
  </Button>
</Link>
 <Link href="/feedback">
  <Button
    size="lg"
    className="bg-white text-black hover:bg-gray-100"
  >
    Submit Feadback
    <Map className="ml-2 h-4 w-4" />
  </Button>
</Link>
          </div>
          
        </GradientHeader>
      <section>
  <h2 className="text-3xl font-bold text-center mb-2">
    How It Works
  </h2>

  <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
    Help us build a better product by sharing your ideas, voting on community
    requests, and tracking upcoming features.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <Card>
      <CardHeader>
        <MessageSquare className="h-8 w-8 text-primary mb-2" />
        <CardTitle>Submit an Idea</CardTitle>
      </CardHeader>

      <CardContent>
        Share your feature requests, report issues, or suggest improvements that
        youd like to see in future updates.
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <Map className="h-8 w-8 text-primary mb-2" />
        <CardTitle>Explore Requests</CardTitle>
      </CardHeader>

      <CardContent>
        Browse ideas submitted by the community and discover the most requested
        features.
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <Zap className="h-8 w-8 text-primary mb-2" />
        <CardTitle>Vote for Features</CardTitle>
      </CardHeader>

      <CardContent>
        Support the ideas you love by voting. The most popular requests help
        shape our development priorities.
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <Map className="h-8 w-8 text-primary mb-2" />
        <CardTitle>Track the Roadmap</CardTitle>
      </CardHeader>

      <CardContent>
        Follow our public roadmap to see what&apos;s planned, what&apos;s in progress, and
        which features have already been released.
      </CardContent>
    </Card>
  </div>
</section>

        <section className="text-center">
          <div className="inline-grid grid-cols-3 gap-8 ">
              <div>
                <div className="text-3xl font-bold">1,234</div>
                <div className="text-muted-foreground">Suggestions</div>
              </div>
               <div>
                <div className="text-3xl font-bold">8,558</div>
                <div className="text-muted-foreground">Votes Cast</div>
              </div>
               <div>
                <div className="text-3xl font-bold">234+</div>
                <div className="text-muted-foreground">Feature</div>
              </div>
          </div>
        </section>
    </div>
  );
}