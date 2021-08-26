module Note
class Generator < Jekyll::Generator
  def generate(site)
    site.collections['notes'].docs.each do |note|
      time = Time.at(note.data['title'].to_i)
      note.data['date'] = time
    end
  end
end
end
