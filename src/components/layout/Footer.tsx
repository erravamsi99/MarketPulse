
import { Link } from 'react-router-dom';
import { Github, Linkedin, FileText, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">
                Market<span className="text-neon">Pulse</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              AI-powered stock prediction and financial analytics platform for quantitative trading.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-white hover:text-neon" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="text-white hover:text-neon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-muted-foreground hover:text-neon transition-colors">Products</Link></li>
              <li><Link to="/technology" className="text-muted-foreground hover:text-neon transition-colors">Technology</Link></li>
              <li><Link to="/insights" className="text-muted-foreground hover:text-neon transition-colors">Insights</Link></li>
              <li><Link to="/use-cases" className="text-muted-foreground hover:text-neon transition-colors">Use Cases</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-neon transition-colors flex items-center">
                API Docs <ExternalLink size={14} className="ml-1" />
              </a></li>
              <li><a href="#" className="text-muted-foreground hover:text-neon transition-colors flex items-center">
                Media Kit <ExternalLink size={14} className="ml-1" />
              </a></li>
              <li><a href="#" className="text-muted-foreground hover:text-neon transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-neon transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <p className="text-muted-foreground mb-4">
              Contact us for inquiries about our platform, partnerships, or investment opportunities.
            </p>
            <Link to="/contact" className="btn-outline inline-block">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MarketPulse. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-muted-foreground text-sm">Powered by</span>
            <div className="flex items-center ml-4 space-x-4">
              <span className="text-xs py-1 px-2 bg-muted rounded-md">AWS</span>
              <span className="text-xs py-1 px-2 bg-muted rounded-md">OpenAI</span>
              <span className="text-xs py-1 px-2 bg-muted rounded-md">Pinecone</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
