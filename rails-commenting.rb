# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is the model controller fo the Model BlogPosts, and the start of declaring an index method which will be a collection of all the blog post once they are created
class BlogPostsController < ApplicationController
  def index
    # ---2) By setting @posts equal to BlogPost.all, it is stating that when we call @posts it will reference all of the instances of the Model BlogPost. As we know from our Ruby song, "Every def needs an end", this closes the method 'index' so that none of the logic spills into the next method we declare.
    @posts = BlogPost.all
  end

  # ---3) Declaring a method called show. The .find has the parameter of (parms[:id]) which allows us to reference the @post by its Primary Key(unique value given to each indexed item in a database). This allows the user to view a specific Blog post.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Declaring the method new allows us to add a Blog post, or in other words a new instance of the Model class BlogPost. It doesn't need (params[:id]) because we are making a new post that will create its own prime key, not updating an existing instance.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The create method uses the HTTP action 'post' because the user will be able to view the added blog, once it is created. You have to reference the strong params, in this example blog_post_params, because when the user is creating a new instance(blog post) it has to match the given criteria that was set when generating the table. We know from the strong params that if the user creates a post that doesn't include a :title and :content then the post will not be valid. By setting the if statement condition to @post.valid? it checks to see that the post has the required information. If the post is valid it will redirect to the show page via the blog_post_path
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) To edit a post we first need to find the :id of that post). We assign @post to equal the model class BlogPost.find(params[:id]) This insures that we have the correct instance of BlogPost before we edit the information.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) When updating an instance you need to use the HTTP verb post, because the changes made will be shown to the user. The strong params are telling @post.update that it needs to have :title, :content to be valid. If it matches the given strong params criteria, then it will re direct you to the main blog_post_path or show page, with the @post as the argument
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) HTTP verb Delete. After the Destroy Method has been implimented the user will be redirected to the show page where they can view all the blog posts(minus the post that was deleted)
      redirect_to blog_posts_path
    end
  end

  # ---9) By using the key word private, it makes it so the strong params can't be accessed by the rest of the methods, unless it is called specifically in the method itself.
  private
  def blog_post_params
    # ---10) This statement is setting the criteria for our strong params, so when it is referenced, the method will not be valid unless it has a :title, and :content 
    params.require(:blog_post).permit(:title, :content)
  end
end
