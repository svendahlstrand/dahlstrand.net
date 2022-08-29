require 'html-proofer'

task :test do
  sh 'bundle exec jekyll clean && bundle exec jekyll build'
  HTMLProofer.check_directory('./_site',
                              empty_alt_ignore: true,
                              check_html: true,
                              ignore_urls: [
                                'https://indieauth.com/auth',
                                'https://calm-badlands-99608.herokuapp.com/micropub',
                                'https://www.sinatrarb.com',
                                'https://www.nytimes.com'
                              ]).run
end

task default: [:test]
