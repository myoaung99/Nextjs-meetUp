import { connectDataBase, insertDocument } from "../../../helper/api-util";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { data } = req.body;

    const client = await connectDataBase();

    async function main() {
      const result = await insertDocument(client, data);

      res.status(200).json({
        message: "Created new meetup successfully",
        meetup: data,
      });

      return result;
    }

    main()
      .then(console.log)
      .catch(console.error)
      .finally(() => client.close());
  }
};

export default handler;
