# frozen_string_literal: true

require "jekyll"
require "nokogiri"

module Jekyll
  class LoadingLazy
    # Add support for HTML5 documents.
    def self.process_tags(html)
      is_html5 = /<!DOCTYPE\s+html\s*>/i.match? html[0, 512]
      content = is_html5 ? Nokogiri.HTML5(html) : Nokogiri.parse(html)
      tags = content.css("img[src], iframe[src]")
      tags.each { |tag| tag["loading"] = "lazy" unless tag["loading"] }
      content.to_html
    end
  end
end
