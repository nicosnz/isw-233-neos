import type { ApiResponse} from "../components/blog/TarjetaBlog.interface";

class DbPosts {

  static instance:DbPosts|null = null;
  private data!:ApiResponse;

  constructor(data:ApiResponse){
    if(DbPosts.instance){
      return DbPosts.instance;
    }

    this.data = data;

    DbPosts.instance = this;
  }

  static async getInstance(){

    if(!DbPosts.instance){

      const res = await fetch("/data/posts.json");
      const data = (await res.json()) as ApiResponse;

      DbPosts.instance = new DbPosts(data);
    }

    return DbPosts.instance;
  }

  

  getPosts(){
    return this.data.posts;
  }

  

}

export default DbPosts;