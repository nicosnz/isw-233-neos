class DbPosts {

  static instance = null;

  constructor(data){
    if(DbPosts.instance){
      return DbPosts.instance;
    }

    this.data = data;

    DbPosts.instance = this;
  }

  static async getInstance(){

    if(!DbPosts.instance){

      const res = await fetch("/data/posts.json");
      const data = await res.json();

      DbPosts.instance = new DbPosts(data);
    }

    return DbPosts.instance;
  }

  

  getPosts(){
    return this.data.posts;
  }

  

}

export default DbPosts;