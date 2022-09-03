require 'html-proofer'

task :test do
  sh 'bundle exec jekyll clean && bundle exec jekyll build'
  HTMLProofer.check_directory('./_site',
                              empty_alt_ignore: true,
                              check_html: true,
                              ignore_urls: [
                                'https://indieauth.com/auth'
                              ]).run
end

task default: [:test]
