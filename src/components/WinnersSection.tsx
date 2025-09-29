import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const winners = [
  {
    teamName: "Proddy HQ",
    position: "1st Place",
    image: "/FirstPlace.jpg",
  },
  {
    teamName: "Dev Sphere",
    position: "1st Runner Up",
    image: "/FirstRunnerUp.jpg",
  },
  {
    teamName: "Tech Terrific",
    position: "2nd Runner Up",
    image: "/SecondRunnerUp.jpg",
  },
  {
    teamName: "Prody HQ",
    position: "People's Choice",
    image: "/PeoplesChoice.jpg",
  },
  {
    teamName: "Bit Brains",
    position: "Best Innovation",
    image: "/BestInnovation.jpg",
  },
];

export function WinnersSection() {
  return (
    <section id="winners" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block mb-6">
            <motion.div
              className="absolute -top-8 -left-8 text-blue-500/80"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 
                filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                Vibeathon Winners
              </span>
            </h2>
            <motion.div
              className="absolute -top-8 -right-8 text-blue-400/80"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
          </div>
          <motion.p
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Celebrating the brilliant minds who conquered the Vibeathon. Here are our champions!
          </motion.p>
        </motion.div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent>
            {winners.map((winner, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <Card className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <CardContent className="flex flex-col items-center justify-start p-0">
                      <img
                        src={winner.image}
                        alt={`Image for ${winner.teamName}`}
                        className="w-full h-96 object-cover"
                      />
                      <div className="p-6 text-center">
                        <h3 className="text-2xl font-bold text-primary">{winner.position}</h3>
                        <p className="text-xl font-semibold text-foreground">{winner.teamName}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
        </Carousel>
      </div>
    </section>
  );
}
