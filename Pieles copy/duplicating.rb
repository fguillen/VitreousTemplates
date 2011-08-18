require 'fileutils'

Dir.glob('*.jpg')[0,4].each do |e|
  puts "copying #{e} into d_c_#{e}"
  FileUtils.cp( e, "d_c_#{e}" )
end