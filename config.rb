# Reload the browser automatically whenever files change
activate :livereload

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

class BuildEntries < Middleman::Extension
  def initialize(app, options_hash={}, &block)
    super
    app.after_build do |builder|
      builder.create_file "build/test.json" do
        json = {
          "test" => "value"
        }
        json.to_s
      end
    end
  end
end

::Middleman::Extensions.register(:build_entries, BuildEntries)

activate :build_entries
