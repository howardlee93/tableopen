# config/initializers/time_formats.rb
Time::DATE_FORMATS[:date] = '%x'
Time::DATE_FORMATS[:time] = '%I:%M %p'
Time::DATE_FORMATS[:weekday] = '%a'

Time::DATE_FORMATS[:full] = '%a | %x | %I:%M %p'
Time::DATE_FORMATS[:month_and_year] = '%B %Y'
Time::DATE_FORMATS[:short_ordinal] = lambda { |time| time.strftime("%B #{time.day.ordinalize}") }