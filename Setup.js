module.exports = {
  async execute(interaction) {
    await interaction.reply({ content: "Building police structure... 🚔", ephemeral: true });

    const guild = interaction.guild;

    // ========== ROLES ==========
    const roles = [
      "Chief Constable",
      "Deputy Chief Constable",
      "Assistant Chief Constable",
      "Superintendent",
      "Chief Inspector",
      "Inspector",
      "Sergeant",
      "Constable",
      "PCSO",

      "RPU",
      "ARV",
      "DSU",
      "CID",
      "PSU",
      "Air Support",
      "Marine Unit"
    ];

    for (const r of roles) {
      if (!guild.roles.cache.find(x => x.name === r)) {
        await guild.roles.create({ name: r });
      }
    }

    // ========== CATEGORIES ==========
    const categories = {
      "👮 COMMAND": ["👑-command-chat"],
      "🚔 RESPONSE": ["🚨-response-chat"],
      "🚓 RPU": ["🚓-rpu-chat"],
      "🔫 ARV": ["🔫-arv-chat"],
      "🐕 DSU": ["🐕-dsu-chat"],
      "🕵️ CID": ["🕵️-cid-chat"],
      "🛡 PSU": ["🛡-psu-chat"],
      "🚁 AIR SUPPORT": ["🚁-air-chat"],
      "🚤 MARINE": ["🚤-marine-chat"],
      "📋 TRAINING": ["📋-training-chat"]
    };

    for (const [catName, channels] of Object.entries(categories)) {
      const category = await guild.channels.create({
        name: catName,
        type: 4 // category
      });

      for (const ch of channels) {
        await guild.channels.create({
          name: ch,
          type: 0,
          parent: category.id
        });
      }
    }

    await interaction.followUp({
      content: "Done. Police structure created 🚔🔥",
      ephemeral: true
    });
  }
};
