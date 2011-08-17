require 'fileutils'

Dir.glob('*.jpg').each do |e|
  FileUtils.cp( e, "b_#{e}" )
end