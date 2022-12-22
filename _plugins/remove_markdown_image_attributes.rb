module Jekyll
  module RemoveMarkdownImageAttributes
    def remove_markdown_image_attributes(input)
      input.gsub(/\){.+}/, ')')
    end
  end
end

Liquid::Template.register_filter(Jekyll::RemoveMarkdownImageAttributes)
