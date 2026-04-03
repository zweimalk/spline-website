import { type JobPost, getJobPosts } from "@/data/getJobPosts";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Suspense } from "react";
import { Body1 } from "./Typo/Body1";
import { Title } from "./Typo/Title";
import { JobCard } from "./job-card";
import { Link } from "./link";
const jobsWithParsedContent = (jobPosts: JobPost[]) =>
  jobPosts.map((job) => ({
    title: job.advert.name,
    url: job.url,
  }));

export default async function JobsSection() {
  const jobPosts = await getJobPosts();
  const jobs = jobsWithParsedContent(jobPosts);
  return (
    <Suspense
      fallback={
        <div>
          <Body1 className="text-center">Loading...</Body1>
        </div>
      }
    >
      <div className="container mx-auto px-4 mt-20" id="join-us">
        <Title className="mb-10 text-center">join us</Title>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 items-center justify-center">
          {jobs.map((job) => (
            <JobCard key={job.url} {...job} />
          ))}
        </div>
        <Body1 className="text-center pt-6 text-gray-3 dark:text-gray-7">
          & more...
        </Body1>
        <div className="flex justify-center mt-8">
          <Link
            href="https://spline.traffit.com/career/"
            target="_blank"
            className="cursor-pointer xl:text-xl flex items-center gap-x-4 justify-center"
          >
            <button
              type="button"
              className="cursor-pointer mt-8 md:mt-10 flex items-center gap-x-4 bg-foreground text-background px-5 py-3 xl:px-4 xl:py-2 rounded-lg tracking-wider leading-[150%] xl:text-[15px] font-semibold"
            >
              See all current offers
              <div className="flex items-center justify-center w-6 h-6 xl:w-7 xl:h-7 ml-2">
                <ArrowRightIcon className="w-8 h-8" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
