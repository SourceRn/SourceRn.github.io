export const postsQuery = `*[_type=="post"]|order(publishedAt desc){
  _id, title, "slug": slug.current, excerpt, cover, tags, publishedAt
}`;

export const postBySlugQuery = `*[_type=="post" && slug.current==$slug][0]{
  _id, title, "slug": slug.current, excerpt, cover, tags, publishedAt, content
}`;

export const featuredProjectsQuery = `*[_type=="project" && featured==true]|order(year desc)[0..5]{
  _id, title, "slug": slug.current, summary, cover, tech, year, links
}`;

export const projectsQuery = `*[_type=="project"]|order(year desc){
  _id, title, "slug": slug.current, summary, cover, tech, year, links
}`;

export const projectBySlugQuery = `*[_type=="project" && slug.current==$slug][0]{
  _id, title, "slug": slug.current, summary, cover, tech, year, links, content
}`;

export const profileQuery = `*[_type=="profile"][0]{
  name, role, location, avatar, intro, skills, links
}`;