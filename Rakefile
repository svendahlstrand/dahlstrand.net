require 'html-proofer'

task :test do
  sh 'bundle exec jekyll clean && bundle exec jekyll build'
  HTMLProofer.check_directory('./_site',
                              empty_alt_ignore: true,
                              check_html: true,
                              ignore_urls: [
                                'https://indieauth.com/auth',
                                /https?:\/\/www.nytimes.com\/.+/
                              ],
                              ignore_files: [
                                './_site/notes/index.html',
                                './_site/search-space/posts-and-replies/index.html'
                              ]).run
end

task :fetch_and_merge_replies do
  require "open-uri"

  URI.open("https://sod-test.micro.blog/api/all-replies.json") do |replies|
    File.open("./_site/search-space/documents.json", "a") do |file|
      file.write(replies.read)
    end
  end
end

task default: [:test]
