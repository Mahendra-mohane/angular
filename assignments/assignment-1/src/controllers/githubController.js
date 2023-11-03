const axios = require('axios');
const Github = require('../models/githubModel');

const saveToMongoDB = async (req, res) => {
  const { url } = req.body;

  try {
    const response = await axios.get(url);
    const repositories = response.data;

    for (const repo of repositories) {
      const {
        id,
        name,
        html_url,
        description,
        created_at,
        open_issues,
        watchers,
        owner: { id: ownerId, avatar_url, html_url: ownerHtmlUrl, type, site_admin }
      } = repo;

      await Github.findOneAndUpdate(
        { id },
        {
          id,
          name,
          html_url,
          description,
          created_at,
          open_issues,
          watchers,
          owner: {
            id: ownerId,
            avatar_url,
            html_url: ownerHtmlUrl,
            type,
            site_admin
          }
        },
        { upsert: true }
      );
    }

    res.status(200).json({ message: 'Data saved to MongoDB' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getFromMongoDB = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Github.findOne({ id });

    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  saveToMongoDB,
  getFromMongoDB
};
