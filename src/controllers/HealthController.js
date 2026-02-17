const getHealth = (req, res) => {
  try {
    console.log('[Health] Health check requested');
    res.status(200).json({
      status: 'ok',
      message: 'AgroConecta backend is running',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error(`[Health] Error: ${error.message}`);
    res.status(500).json({ status: 'error', message: 'Health check failed' });
  }
};

module.exports = { getHealth };