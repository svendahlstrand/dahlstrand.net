require 'html-proofer'

task :test do
  sh 'bundle exec jekyll clean && bundle exec jekyll build'
  HTMLProofer.check_directory('./_site',
                              empty_alt_ignore: true,
                              check_html: true,
                              only_4xx: true,
                              url_ignore: [
                                'https://indieauth.com/auth',
                                'https://calm-badlands-99608.herokuapp.com/micropub'
                              ]).run
end

task default: [:test]
