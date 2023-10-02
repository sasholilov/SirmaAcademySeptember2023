function jediArchivesSearch(jedisArr, jedi) {
  if (jedisArr.indexOf(jedi) != -1) {
    console.log(`First Occurrence: ${jedisArr.indexOf(jedi)}`);
    console.log(`Last Occurrence: ${jedisArr.lastIndexOf(jedi)}`);
  } else console.log("Record not found");
}
jediArchivesSearch(["Yoda", "Obi-Wan", "Yoda", "Luke"], "Yoda");
jediArchivesSearch(["Han", "Leia", "Chewbacca", "Han"], "Han");
jediArchivesSearch(["Lando", "Vader", "Palpatine"], "Maul");
jediArchivesSearch(["Yoda", "Obi-Wan", "Anakin", "Luke"], "Luke");
