source 'https://rubygems.org'

gem 'jekyll'

group :jekyll_plugins do
  gem 'jekyll-sitemap'
end

group :test do
  # FIXME: Temporary workaround for Apple Silicon Macs.
  gem 'ethon', github: 'typhoeus/ethon'

  gem 'html-proofer'
  gem 'rake'
end

gem "webrick", "~> 1.7"
gem "jekyll-image-size", "~> 1.2"
