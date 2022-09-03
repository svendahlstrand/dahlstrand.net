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
                                './_site/notes/index.html'
                              ]).run
end

task default: [:test]
