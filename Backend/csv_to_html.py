import pandas as pd
csv_file = pd.read_csv('/home/balasudip6/Desktop/QuaxProject/test/QuAX/Module5Output/module5-output.csv')
csv_file.index = csv_file.index + 1
#print(csv_file)
csv_file.to_csv('/home/balasudip6/Desktop/QuaxProject/test/QuAX/Module5Output/module5-output.csv', header=["Question", "Answer"], index=False)
csv_file.to_html("output.html")
html_file= csv_file.to_html()

# def convert():
#     csv_file = pd.read_csv('/home/balasudip6/Desktop/QuaxProject/test/QuAX/Module5Output/module5-output.csv')
#     html = csv_file.to_html()
    
#     html_file = open("output.html", "w")
#     html_file.write(html);
#     html_file.close(); 
    
#     return html

# if __name__ == '__main__':
#     var = convert()
#     print(var)