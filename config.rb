require 'redcarpet'
require 'yaml'

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

class BuildCompanies < Middleman::Extension
  def initialize(app, options_hash={}, &block)
    super
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, :autolink => true)
    companies = []
    Dir.glob("./companies/*.md").each do |company_file|
      companies << {
        "html" => markdown.render(File.read(company_file).gsub(/---.+?---/m, ""))
      }.merge(YAML.load_file(company_file))
    end
    File.write("./data/companies.json", companies.to_json)
  end
end

::Middleman::Extensions.register(:build_companies, BuildCompanies)

activate :build_companies
activate :livereload
