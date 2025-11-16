


import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/motion/Button';
import { FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export function Contact() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Handle form submission
    console.log('Form submitted:', formData);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
    }
    else {
      setStatus("error");
    }


    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-serif text-primary mb-4">Say Hello</h2>
          <motion.div
            className="w-20 h-1 bg-accent"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-accent/10 p-3 rounded-lg">
                  <FaRegEnvelope className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-primary mb-1">Email</p>
                  <a
                    href="mailto:andrew.zhang@example.com"
                    className="text-secondary hover:text-accent transition-colors"
                  >
                    andrew.zhang9799@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-accent/10 p-3 rounded-lg">
                  <FaMapMarkerAlt className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-primary mb-1">Location</p>
                  <p className="text-secondary">Melbourne, VIC</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-primary mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-input-background border-border p-2 rounded-sm"
                  placeholder="i'm called..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-primary mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-input-background border-border  p-2 rounded-sm"
                  placeholder="contact me at..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-input-background border-border min-h-[150px] p-2 rounded-sm resize-none"
                  placeholder="i want to talk about..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg"
              >
                Send Message
              </Button>
              {status === "loading" && <p>Sending…</p>}
              {status === "success" && <p>Message successfully sent!</p>}
              {status === "error" && <p>Something went wrong.</p>}
            </form>
          </motion.div>
        </div>

        <div className="mt-24 pt-12 border-t border-border text-center">
          <p className="text-secondary">
            © 2025 Andrew Zhang. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}