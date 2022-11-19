import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: '8233c76e31b08beab969d65e1ce9d2ae-us21',
  server: 'us21', // e.g. us1
});

const subscribe = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await mailchimp.lists.addListMember('081b7976ed', {
      email_address: email,
      status: 'subscribed',
    });

    return res.status(201).json({ error: '' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default subscribe;
