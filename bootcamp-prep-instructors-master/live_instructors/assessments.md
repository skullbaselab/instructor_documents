## Assessments

Assessments are administered every Monday and Friday (except for the first Monday).
Assessments are just for practice, so tell your students not to stress about them.
It is quite typical for students to points on the Friday assessments. The hope
is that they learn from their mistakes and improve on the follow-up Monday assessment.
Assessments are closed-book; no notes. However, they can ask instructors for help.
This way you will see what particular students are struggling with.
After taking an assessment for an hour, students must upload their work by messaging you on slack.
Advise students to upload the **entire** assessment folder. This way you will be
able to easily score their assessment once you download their submission.

There's also an assessment on W4D4.

### Administering an Assessment

- Send the appropriate [assessment][assessments-repo] to your class's slack channel
- Be available to help students for the hour.
- Students should DM you their assessment via slack when time is up
- Students should not leave, unless they fin

Students should take the assessment for an hour. During this time you should
be available for questions. Since the assessments are for practice, feel free to help
the students, especially if you see them struggling. Give the students appropriate help.
Some students may only need a small hint to nudge them in the right direction. Other
students may be completely lost. For students struggling hard, pair up with them on
a problem and solve it together. Tell them just focus on that problem for the rest
of the time if it is clear they are not comfortable with the problem.

#### Instructions for Students

- **During an assessment**
  - Download the assessment and unzip it to somewhere you can access easily, like your Desktop.
  - Do not move or rename any of the files or folders inside.
  - Rename the outer assessment folder to `firstName_lastName_num` using your name and the assessment number. For example, I would name my first assessment `alvin_zablan_1`.
  - Open the renamed assessment folder in Atom. Your job is to fill in the functions in the `problems` subfolder. Only modify the .js files in the `problems` folder.
  - Use your command line to `cd` into your assessment folder. You can then use the `mocha` command to test your assessment for correctness. Feel free to run `mocha` as frequently as you like.

- **After an assessment**
  - Make sure you renamed your assessment folder correctly.
  - Compress/zip your entire assessment folder (by right clicking)
  - Direct message your instructor/TAs with the submission attached

#### Friday Assessments

- 6:30pm - 7:55pm Review for the assessment by going over problems or doing mini lectures
to spot check tough concepts
- 8:00pm - 9:00pm Take the assessment for the last hour.

There is no new lecture material on Fridays. The first hour and a half of class will be review
and the second hour will be dedicated to taking the assessment.

After going over yesterdays problem set, go over any topics the class would like to review.
If they don't have any specific topics, then work through the a few problems in the day's folder.
Stop review at 7:55 so you can promptly begin the assessment at 8:00.

#### Monday Assessments

- 6:30pm - 7:30pm Take the assessment for the first hour
- 7:35pm - 9:00pm Go over the assessment problems, then have students work on problem set (solo or in pairs)

There is no new lecture material on Mondays. Take the assessment and then review
those same assessment problems as a class. Since there is no new material today,
this is a great chance to spot check any previous material you saw the class
struggled with during the assessment.

This review will probably finish early, so have the students use the extra time to
work on the day's problems solo or in pairs.

### Assessment Corrections

For every assessment, students are required to complete corrections and upload
an 100% working assessment before the next assessment is taking.

  - Monday assessment corrections are due by Friday's class
  - Friday assessment corrections are due by Monday's class

Mark who has completed corrections in the spreadsheet with an `x`

Student's will receive a strike if they fail to complete these corrections.
The hope is that students learn from these corrections. Emphasize to your students
that they should take these corrections seriously, most students make their gains
after taking the time to study their mistakes and testing themselves.


### Grading Assessments and Feedback

After students take an assessment, you must score the assessment and input the scores
into the spreadsheet. A student's assessment score is the
number of mocha specs passed. For the Friday assessments, you only need to score
their submissions with mocha. However, you should peek inside their code and take note
of what you see, especially if they have a low mocha score.

- For Friday assessments, you should input the scores by the following Monday.
- For Monday assessments, you should input the scores by the following Wednesday.

For Monday assessments you must log their scores in the spreadsheet as well as
annotate their code with comments. You should upload the students' annotated assessment
by Thursday's class, so they can view your Feedback before the next assessment.

[assessments-repo]: https://github.com/appacademy/new-bootcamp-prep-assessments/tree/master/assessments
