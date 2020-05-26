exports.run = (client, message, args, Discord) => {
	// Tomar la primera mención del mensaje
  let member = message.mentions.members.first(); // Array / arreglo

  let memberUsername = member.tag; // Nombre#1234

	// Kickear a la mención '@'
  member.ban().then((member) => {
    // Notificar al servidor de que el usuario ha sido kickeado
    message.channel.send(memberUsername + ' Ha sido sancionado del servidor, por incumplir las reglas.');
  });
};

/*
	var member = message.mentions.members.first();

    member.kick().then((member) => {
        // Success message
    });
 */
