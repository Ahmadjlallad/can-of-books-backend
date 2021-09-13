const seedData = async (Books) => {
  try {
    const test = new Books({
      title: "To Kill a Mockingbird",
      description:
        "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. ",
      img_URL:
        "https://cdn.britannica.com/q:60/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
      status: "1",
      email: "ahmadibrahim1997@gmail.com",
    });
    const test2 = new Books({
      title: "The Lying Life of Adults",
      description: `From the author of Homegoing, the breakout debut novel about the two very different legacies of an Asante woman living in 18th-century Ghana, comes a contemporary tale of a Ghanaian family in Alabama struggling to make sense of loss.`,
      img_URL:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580421179-41E05G7xDQL.jpg?crop=1xw:1xh;center,top&resize=768:*",
      status: "2",
      email: "ahmadibrahim1997@gmail.com",
    });
    const test3 = new Books({
      title: "The Glass Hotel: A novel",
      description: `Fans of the genre-defying post-apocalyptic novel Station Eleven, rejoice: Emily St. John Mandel is back with a new novel that weaves otherworldly elements throughout the storyline of a modern financial thriller.`,
      img_URL:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580421797-313uORwmeaL.jpg?crop=1xw:1xh;center,top&resize=768:*",
      status: "3",
      email: "ahmadibrahim1997@gmail.com",
    });
    await test.save();
    await test2.save();
    await test3.save();
  } catch (err) {
    console.log(err);
  }
};
module.exports = seedData;
