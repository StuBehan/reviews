# review 15-apr-2021 

School reports Company

- test results
- csv in string
- report 
  - "green, amber, red"
  - min =1 
  - max =unlimited
  - check for case
  - miss-spellings uncounted

input                        output
"Green, Red, Amber, Red" => "Green: 1\nAmber: 1\nRed: 2"

""                       =>  "No results given"

"gren"                    => "Uncounted: 0"

"Green, Red, Amber, Red,  => "Green: 2\nAmber: 1\nRed: 3\nUncounted: 1"
green, Gren, red"


class: report

    generate_report(string)
        return report_string 