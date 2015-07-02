class UserSessionsController < ApplicationController
  def new
  	@user = User.new
  end

  def create
  	if @user = login(params[:email], params[:password])
  		redirect_back_or_to(root_url, notice: 'login successful')
  	else
      redirect_back_or_to(root_url, notice: 'login failed')
   	end
  end

  def destroy
  	logout
  	redirect_to(root_url, notice: 'logged out!')
  end
end
