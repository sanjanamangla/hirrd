import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <div className="px-4 sm:px-20">
      <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
        <section className="text-center">
          <h1 className="flex flex-col items-center justify-center text-4xl sm:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-500 via-gray-200 to-white tracking-tighter">
            Find Your Dream Job
            <span className="flex items-center gap-2 sm:gap-6">
              and get{" "}
              <img
                src="/logo.png"
                alt="Hirrd Logo"
                className="h-14 sm:h-24 lg:h-32"
              />
            </span>
          </h1>
          <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
            Explore thousands of job listings or find the perfect candidate
          </p>
        </section>
        <div className="flex gap-6 justify-center">
          <Link to="/jobs">
            <Button variant="blue" size="sm" className="sm:hidden ">
              Find Jobs
            </Button>
            <Button variant="blue" size="xl" className="hidden sm:inline-block">
              Find Jobs
            </Button>
          </Link>
          <Link to="/post-job">
            <Button variant="destructive" size="sm" className="sm:hidden">
              Post a Job
            </Button>
            <Button variant="destructive" size="xl" className="hidden sm:inline-block">
              Post a Job
            </Button>
          </Link>
        </div>
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full py-10"
        >
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map(({ name, id, path }) => {
              return (
                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                  <img
                    src={path}
                    alt={name}
                    className="h-9 sm:h-14 object-contain"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <img src="/banner.jpeg" className="w-full" />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>For Job Seekers</CardTitle>
            </CardHeader>
            <CardContent>
              Search and apply for jobs, track applications, and more.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Employers</CardTitle>
            </CardHeader>
            <CardContent>
              Post jobs, manage applications, and find the best candidates.
            </CardContent>
          </Card>
        </section>
        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, idx) => {
            return (
              <AccordionItem key={idx} value={`item-${idx + 1}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </main>
    </div>
  );
};

export default LandingPage;
