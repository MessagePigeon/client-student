using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MessagePigeonClientStudentPopup
{
    internal static class Program
    {
        /// <summary>
        /// 应用程序的主入口点。
        /// </summary>
        [STAThread]
        static void Main(string[] args)
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            string argTitle = "";
            string argMessage = "";
            string argDelayTimeStr = "";
            bool debug = true;
            for (int i = 0; i < args.Length; i++)
            {
                if (args[i] == "--no-debug")
                {
                    debug = false;
                }
                else if (args[i] == "--message-id")
                {
                    argMessage = args[i + 1];
                    i++;
                }
                else if (args[i] == "--title")
                {
                    argTitle = args[i + 1];
                    i++;
                }
                else if (args[i] == "--delay-time")
                {
                    argDelayTimeStr = args[i + 1];
                    i++;
                }
                else if (args[i] == "--message-start")
                {
                    for (int j = i + 1; args[j] != "--message-end"; j++)
                    {
                        argMessage += args[j].Replace(@"\n", Environment.NewLine);
                        if (args[j + 1] != "--message-end")
                        {
                            argMessage += " ";
                        }

                        i++;
                    }

                    i++;
                }
            }

            if (debug)
            {
                Application.Run(new Form1());
            }
            else
            {
                bool delayTimeParseSuccess = uint.TryParse(argDelayTimeStr, out uint delayTime);
                if (!delayTimeParseSuccess)
                {
                    MessageBox.Show(@"Delay Time Must Be Number", @"Delay Time Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }

                Application.Run(new Form2(argTitle, argMessage, delayTime));
            }
        }
    }
}