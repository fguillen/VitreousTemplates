require 'fileutils'

Dir.glob('./website/*.png').each do |e|
  16.times do |i|
    final_path = "#{File.dirname( e )}/a_#{i}_#{File.basename( e )}"
    puts "copying #{e} into #{final_path}"
    FileUtils.cp( e, final_path )
  end
end