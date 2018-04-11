require 'github/markup'
file = "/Users/winniengo/AppAcademy/Bootcamp-Prep-Online/scripts/12_chapter/2.5_quiz_async_vs_sync.md"
puts GitHub::Markup.render(file, File.read(file))
