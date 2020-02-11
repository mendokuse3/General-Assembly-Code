def get_angle (hours, minutes)
  return "Out of range" if hours > 12 || minutes >= 60
  hours_deg = (hours * 30) + (minutes/60.0 * 30)
  mins_deg = minutes * 6

  hours_deg -= 360 if hours_deg > 360

  deg_one = (mins_deg - hours_deg).abs
  deg_two = 360 - deg_one

  return [deg_one, deg_two]
end

puts get_angle 3, 45
puts get_angle 6, 00
puts get_angle 12, 00
