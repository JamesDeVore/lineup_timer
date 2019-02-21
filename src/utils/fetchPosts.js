export const fetchRecentPosts = async () => {
  let recentLineupPost;
  let terms = ["lineup", "line-up",   "LINEUP", "Lineup", "setlist", "Setlist", "prediction", "predictions", "line up"]
  let initialResponse = await fetch("https://www.reddit.com/r/electricdaisycarnival/new/.json?limit=500&sort=date").then(r=>r.json())
  let { data: {children, after} } = initialResponse;
  children.forEach(child => {
    //go through all recent posts
    if(!recentLineupPost){
      //haven't found one yet
    let {data:{title, selftext}} = child
    terms.forEach(term => {
      //look for one of the terms in the title or text
      if(title.includes(term) || selftext.includes(term)){
        recentLineupPost = child;
      }
    })
  }
})
return recentLineupPost
}