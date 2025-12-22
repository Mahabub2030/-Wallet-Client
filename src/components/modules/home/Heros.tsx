// import { Star } from "lucide-react";

// import { cn } from "@/lib/utils";

// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// interface Hero7Props {
//   heading?: string;
//   description?: string;
//   button?: {
//     text: string;
//     url: string;
//     className?: string;
//   };
//   reviews?: {
//     count: number;
//     rating?: number;
//     avatars: {
//       src: string;
//       alt: string;
//     }[];
//   };
//   className?: string;
// }

// export const HeroSections = ({
//   heading = "",
//   description = "",
//   //   heading = "Send Money. Inspire Ideas. Connect, Share, and Transform the World.",
//   //   description = "You can controle your money from any were send to your fmaliy your friends.",
//   button = {
//     text: "Explore More",
//     url: "https://www.shadcnblocks.com",
//   },
//   reviews = {
//     count: 200,
//     rating: 5.0,
//     avatars: [
//       {
//         src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
//         alt: "Avatar 1",
//       },
//       {
//         src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
//         alt: "Avatar 2",
//       },
//       {
//         src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
//         alt: "Avatar 3",
//       },
//       {
//         src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
//         alt: "Avatar 4",
//       },
//       {
//         src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
//         alt: "Avatar 5",
//       },
//     ],
//   },
//   className,
// }: Hero7Props) => {
//   return (
//     <section className={cn("py-32", className)}>
//       <div className="space-y-4 mx-auto mb-12 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
//         >
//           Send Money. Inspire Ideas. Connect, <br />
//           <span className="text-primary italic">
//             {" "}
//             Share, and Transform the World.
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mx-auto max-w-3xl text-muted-foreground text-lg md:text-xl leading-relaxed"
//         >
//           Digital-Wallet is a secure, user-friendly digital wallet platform
//           designed for seamless financial transactions. Empowering millions
//           through innovative technology and borderless connectivity.
//         </motion.p>
//       </div>
//       <div className="container text-center mx-auto">
//         <div className="mx-auto flex max-w-5xl flex-col gap-6">
//           <h1 className="text-3xl font-semibold lg:text-6xl">{heading}</h1>
//           <p className="text-balance text-muted-foreground lg:text-lg">
//             {description}
//           </p>
//         </div>
//         <Button asChild size="lg" className="mt-10">
//           <a href={button.url}>{button.text}</a>
//         </Button>
//         <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
//           <span className="mx-4 inline-flex items-center -space-x-4">
//             {reviews.avatars.map((avatar, index) => (
//               <Avatar key={index} className="size-14 border">
//                 <AvatarImage src={avatar.src} alt={avatar.alt} />
//               </Avatar>
//             ))}
//           </span>
//           <div>
//             <div className="flex items-center gap-1">
//               {[...Array(5)].map((_, index) => (
//                 <Star
//                   key={index}
//                   className="size-5 fill-yellow-400 text-yellow-400"
//                 />
//               ))}
//               <span className="mr-1 font-semibold">
//                 {reviews.rating?.toFixed(1)}
//               </span>
//             </div>
//             <p className="text-left font-medium text-muted-foreground">
//               from {reviews.count}+ reviews
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero47Props {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  className?: string;
}

export const HeroSections = ({
  heading = "Digital Wallet",
  subheading = " Send Money. Inspire Ideas. Connect, Share, and Transform the World",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Get Started",
      url: "#",
    },
    secondary: {
      text: "Read the docs",
      url: "#",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg",
    alt: "Placeholder",
  },
  className,
}: Hero47Props) => {
  return (
    <section
      className={cn(
        "bg-background py-20 lg:py-32 container mx-auto",
        className
      )}
    >
      <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-7 lg:w-2/3">
          <h2 className="text-5xl font-semibold text-foreground md:text-5xl lg:text-8xl">
            <span>{heading}</span>
            <span className="text-muted-foreground">{subheading}</span>
          </h2>
          <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
            {description}
          </p>
          <div className="flex flex-wrap items-start gap-5 lg:gap-7">
            <Button asChild>
              <a href={buttons.primary?.url}>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="size-4" />
                </div>
                <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                  {buttons.primary?.text}
                </span>
              </a>
            </Button>
            <Button asChild variant="link" className="underline">
              <a href={buttons.secondary?.url}>{buttons.secondary?.text}</a>
            </Button>
          </div>
        </div>
        <div className="relative z-10">
          <div className="absolute top-2.5 left-1/2! h-[92%]! w-[69%]! -translate-x-[52%] overflow-hidden rounded-[35px]">
            <img
              src={image.src}
              alt={image.alt}
              className="size-full object-cover object-[50%_0%]"
            />
          </div>
          <img
            className="relative z-10"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-2.png"
            width={450}
            height={889}
            alt="iphone"
          />
        </div>
      </div>
    </section>
  );
};
