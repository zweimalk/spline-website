'use server';

interface JobPostParams {
  pageSize?: number;
  currentPage?: number;
  jobPostId?: string;
  sortBy?: string;
  sortDirection?: 'ASC' | 'DESC';
}

interface JobPost {
  id: string;
  title: string;
  advert: {
    values: { field_id: string; value: string }[];
    id: number;
    name: string;
    recruitment: object;
    language: string;
  };
  options: {
    _job_type: string;
    '_job_type.translation': string;
  };
  application_form: string;
  url: string;
  // Add other job post fields as needed
}

export async function getJobPosts({
  pageSize = 5,
  currentPage = 1,
  sortBy = 'id',
  sortDirection = 'ASC',
}: JobPostParams = {}): Promise<JobPost[]> {
  try {
    const sort = JSON.stringify({ sort_by: sortBy, direction: sortDirection });

    const response = await fetch('https://spline.traffit.com/public/job_posts/published', {
      method: 'GET',
      headers: {
        'X-Request-Page-Size': pageSize.toString(),
        'X-Request-Current-Page': currentPage.toString(),
        'X-Request-Sort': sort,
      },
      // Enable caching for production, disable for development
      cache: process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch job posts: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching job posts:', error);
    throw error;
  }
}
