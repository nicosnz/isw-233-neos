import data from '../data/posts.json';

class DbPosts {

  static instance = null;

  constructor(){
    if(DbPosts.instance){
      return DbPosts.instance;
    }

    this.data = data;

    DbPosts.instance = this;
  }

  static async getInstance(){

    if(!DbPosts.instance){

      
      DbPosts.instance = new DbPosts();
    }

    return DbPosts.instance;
  }

  

  getPosts(){
    return this.data.posts;
  }

  

}

export default DbPosts;